<template>
	<v-form
		v-model="isValidCredentials"
		@submit.prevent="onSubmit"
		ref="loginForm"
		lazy-validation
	>
		<v-text-field
			v-model="email"
			:rules="emailRules"
			class="my-2"
			append-icon="mdi-email"
			label="Email"
			name="email"
			type="text"
			hide-details
			outlined
			dense
			validate-on-blur
		></v-text-field>

		<v-text-field
			v-model="password"
			:rules="passwordRules"
			class="py-2"
			id="login-password"
			label="Password"
			name="login-password"
			append-icon="mdi-lock"
			type="password"
			hide-details
			outlined
			dense
			validate-on-blur
		></v-text-field>

		<p class="mb-0">
			<a href="#" class="text-decoration-underline">Forgot your password?</a>
		</p>

		<v-btn class="my-2" color="primary" type="submit">Sign In</v-btn>
	</v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "login-form",
	props: [],
	data() {
		return {
			isValidCredentials: false,
			email: "",
			password: "",
			emailRules: [
				(v) => !!v || "Email is a required field.",
				(v) => /.+@.+\..+/.test(v) || "Must enter a valid email.",
			],
			passwordRules: [(v) => !!v || "Password is a required field."],
		};
	},
	methods: {
		...mapActions({
			login: "authentication/login",
			postAuthLoad: "user/loadUser",
		}),
		onSubmit: async function () {
			if (this.$refs.loginForm.validate()) {
				await this.login({ email: this.email, password: this.password });
				await this.postAuthLoad(this.$store.state.user.uuid);
				this.$router.push("/feed");
			}
		},
	},
};
</script>

<style scoped>
</style>