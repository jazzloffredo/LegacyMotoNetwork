<template>
	<v-form
		ref="accountDetailsForm"
		@submit.prevent="onSubmit"
		lazy-validation
		v-model="valid"
	>
		<v-row>
			<v-col class="py-2" cols="6">
				<v-text-field
					v-model="firstName"
					@blur="onBlurFirstName"
					:rules="firstNameRules"
					append-icon="mdi-account"
					hide-details="auto"
					label="First Name"
					type="text"
					dense
					outlined
					required
				>
				</v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col class="py-2" cols="6">
				<v-text-field
					v-model="lastName"
					@blur="onBlurLastName"
					:rules="lastNameRules"
					append-icon="mdi-account"
					hide-details="auto"
					label="Last Name"
					type="text"
					dense
					outlined
					required
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col class="py-2" cols="7">
				<v-text-field
					v-model="email"
					:rules="emailRules"
					append-icon="mdi-email"
					hide-details="auto"
					label="Email"
					type="text"
					dense
					outlined
					required
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<v-textarea
					name="input-7-1"
					label="Details"
					placeholder="Please enter any additional information here..."
					rows="7"
					row-height="30"
					auto-grow
					hide-details
					outlined
				></v-textarea
			></v-col>
		</v-row>

		<v-btn class="my-2" color="success" type="submit">Send</v-btn>
	</v-form>
</template>

<script>
export default {
	name: "report-form",
	props: [],
	data() {
		return {
			valid: false,
			firstName: this.$store.state.user.accountDetails.firstName,
			lastName: this.$store.state.user.accountDetails.lastName,
			email: this.$store.state.user.accountDetails.email,
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
		};
	},
	methods: {
		onSubmit: async function () {
			console.log("Form submission.");
		},
		onBlurFirstName: function () {
			this.firstName = this.capitalize(this.firstName);
		},
		onBlurLastName: function () {
			this.lastName = this.capitalize(this.lastName);
		},
		capitalize: function (word) {
			var split = word.split();

			var capitalized = "";
			for (let partial of split) {
				capitalized += partial.charAt(0).toUpperCase() + partial.slice(1);
			}

			return capitalized;
		},
	},
};
</script>

<style scoped>
</style>