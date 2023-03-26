<script>
import axios from "axios";
import { authMethods } from "@/state/helpers";
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    ...authMethods,
    Logout() {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };
      axios.post(process.env.VUE_APP_SERVER + "v1/user/logout", config).then((res) => {
        console.log(res);
        this.cerrarSesion();
        this.$router.push({ name: "login" });
      });
    },
  },
  mounted() {
    this.Logout();
  },
};
</script>