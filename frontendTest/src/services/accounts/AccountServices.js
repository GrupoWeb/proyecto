import axios from 'axios'
import {api} from '@/api'
import jsPDF from "jspdf";
import 'jspdf-autotable';
import Swal from "sweetalert2";

export const AccountServices = {
    async getAccount() {
        return axios.get(api[0].get.parent).then(accounts => accounts)
    },
    async exportTable(type, columns, items, fileName){
        let cols = columns.filter((d) => d != 'actions');
        let records = items;
        let filename = fileName;

        if (type == 'csv') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = cols
                .map((d) => {
                    return this.capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item) => {
                cols.map((d, index) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !window.navigator.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type == 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            cols.map((d) => {
                rowhtml += '<th>' + this.capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';

            records.map((item) => {
                rowhtml += '<tr>';
                cols.map((d) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            var winPrint = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
            // winPrint.close();
        } else if (type == 'pdf') {
            cols = cols.map((d) => {
                return {header: this.capitalize(d), dataKey: d};
            });
            const doc = new jsPDF('l', 'pt', cols.length > 10 ? 'a3' : 'a4');
            doc.autoTable({
                headStyles: {fillColor: '#eff5ff', textColor: '#515365'},
                columns: cols,
                body: records,
                styles: {overflow: 'linebreak'},
                pageBreak: 'auto',
                margin: {top: 45},
                didDrawPage: () => {
                    doc.text('Export Table', cols.length > 10 ? 535 : 365, 30);
                },
            });
            doc.save(filename + '.pdf');
        } else if (type == 'excel') {
            axios.get(api[0].get.export, {responseType: 'blob'})
                .then(response => {
                    let filename = filename +'.xlsx'
                    const url = URL.createObjectURL(new Blob([response.data], {
                        type: 'application/vnd.ms-excel'
                    }))
                    const link = document.createElement('a')
                    link.href = url
                    link.setAttribute('download', filename)
                    document.body.appendChild(link)
                    link.click()
                })
        }
    },
    capitalize(text) {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    },
    async customAlertSuccess(title, text){
        await Swal.fire({
            title: title,
            text: text,
            imageUrl: require("@/assets/img/logo.png"),
            imageHeight: 150,
            confirmButtonColor: "#556ee6",
        });
    },
    async customAlertDanger(title, text){
        await Swal.fire({
            title: title,
            text: text,
            icon:'error',
            confirmButtonColor: "#f46464",
        });
    },
    async getParents(){
        return axios.get(api[0].get.parents).then(response => response.data)
    },
    async setAccount(name, select){
        return axios.post(api[0].post.setAccount, {
            title: name,
            parent_id: select
        }).then(response => {
            if (response.status === 201) {
                this.customAlertSuccess('Sistema Comunicación Visual', 'Cuenta agregada con exito!')
            }
        })
    },
    async getAccountById(id){
        return axios.get(api[0].get.parent + '/' + id).then(r => r)
    },
    async deleteAccountById(id){
        return axios.delete(api[0].delete.parent + '/' + id).then(r => r)
    },
    async editAccountById(id, name, parent){
        return axios.put(api[0].put.parent + "/" + id,{ title: name, parent_id : parent}).then(r => r)
    }
};

export default { AccountServices }