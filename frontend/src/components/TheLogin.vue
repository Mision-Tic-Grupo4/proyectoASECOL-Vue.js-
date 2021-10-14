<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="correo"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Contraseña"
        count
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn
        block
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="login"
      >
        Login
      </v-btn>

      <v-btn block plain color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    name: "TheLogin",
    message: null,
    valid: true,
    password: "",
    correo: "",
    show1: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    login() {
      axios
        .post("http://localhost:3000/api/usuario/login", {
          correo: this.correo,
          password: this.password,
        })
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          localStorage.setItem("token", data.tokenReturn);
          this.$router.push({ name: "Admin" });
        })
        .catch((error) => {
          this.message = null;
          if ([400, 401].includes(error.response.status)) {
            this.message = "El correo o a contraseña son incorrectos";
          } else {
            this.message =
              "Ocurrió un error interno, intente de nuevo en unos minutos";
          }
        });
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
