<template>
	<v-form id="pre-registration" v-model="isValidPreRegistration">
		<v-text-field
			class="my-2"
			v-model="firstName"
			:rules="firstNameRules"
			label="First Name"
			append-icon="mdi-account"
			type="text"
			hide-details="true"
			validate-on-blur
			outlined
			dense
		></v-text-field>

		<v-text-field
			class="py-2"
			v-model="lastName"
			:rules="lastNameRules"
			label="Last Name"
			append-icon="mdi-account"
			type="text"
			hide-details="true"
			validate-on-blur
			outlined
			dense
		></v-text-field>

		<v-text-field
			class="py-2"
			v-model="email"
			:rules="emailRules"
			label="Email"
			append-icon="mdi-email"
			type="text"
			hide-details="true"
			validate-on-blur
			outlined
			dense
		></v-text-field>

		<v-text-field
			class="py-2"
			v-model="password"
			:rules="passwordRules"
			label="Password"
			append-icon="mdi-lock"
			type="password"
			hide-details="true"
			validate-on-blur
			outlined
			dense
		></v-text-field>

		<v-btn @click="onSubmit" class="my-2" color="primary">Register</v-btn>
	</v-form>
</template>

<script>
export default {
	name: "registration-form",
	props: [],
	data() {
		return {
			isValidPreRegistration: false,
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			firstNameRules: [
				(v) => !!v || "First name is a required field.",
				(v) =>
					(v && v.length <= 32) ||
					"First name must be less than 32 characters.",
			],
			lastNameRules: [
				(v) => !!v || "Last name is a required field.",
				(v) =>
					(v && v.length <= 32) || "Last name must be less than 32 characters.",
			],
			emailRules: [
				(v) => !!v || "Email is a required field.",
				(v) => /.+@.+\..+/.test(v) || "Must enter a valid email.",
			],
			passwordRules: [
				(v) => !!v || "Password is a required field.",
				(v) =>
					(v && v.length <= 128) ||
					"Password must be less than 128 characters.",
			],
		};
	},
	methods: {
		capitalize: function (word) {
			var split = word.split();

			var capitalized = "";
			for (let partial of split) {
				capitalized += partial.charAt(0).toUpperCase() + partial.slice(1);
			}

			return capitalized;
		},
		onSubmit: function () {
			if (!this.isValidPreRegistration) {
				console.log("Form is in an error state.");
			} else {
				this.firstName = this.capitalize(this.firstName);
				this.lastName = this.capitalize(this.lastName);

				this.$store.dispatch("registration/preRegister", {
					firstName: this.firstName,
					lastName: this.lastName,
					email: this.email,
					password: this.password,
				});
			}
		},
	},
};
</script>

<style scoped>
</style>