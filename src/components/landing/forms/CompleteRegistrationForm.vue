<template>
	<v-form
		v-model="valid"
		@submit.prevent="onSubmit"
		ref="registrationForm"
		lazy-validation
	>
		<v-row>
			<v-col cols="6 my-0 py-0">
				<v-text-field
					v-model="firstName"
					:rules="firstNameRules"
					@blur="onBlurFirstName"
					label="First Name"
					append-icon="mdi-account"
					type="text"
					required
				></v-text-field>
			</v-col>
			<v-col cols="6 my-0 py-0">
				<v-text-field
					v-model="lastName"
					:rules="lastNameRules"
					@blur="onBlurLastName"
					append-icon="mdi-account"
					label="Last Name"
					type="text"
					required
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="6 my-0 py-0">
				<v-text-field
					v-model="email"
					:rules="emailRules"
					append-icon="mdi-email"
					label="Email"
					type="text"
					required
				></v-text-field>
			</v-col>
			<v-col cols="6 my-0 py-0">
				<v-text-field
					v-model="confirmEmail"
					:rules="confirmEmailRules"
					append-icon="mdi-email"
					label="Confirm Email"
					type="text"
					required
					validate-on-blur
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="6 my-0 py-0">
				<v-text-field
					v-model="password"
					:rules="passwordRules"
					:counter="128"
					append-icon="mdi-lock"
					label="Password"
					type="password"
					required
				></v-text-field>
			</v-col>
			<v-col cols="6 my-0 py-0">
				<v-text-field
					v-model="confirmPassword"
					:rules="confirmPasswordRules"
					:counter="128"
					append-icon="mdi-lock"
					label="Confirm Password"
					type="password"
					required
					validate-on-blur
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="4">
				<v-select
					v-model="gender"
					:items="genderSelectItems"
					:rules="genderRules"
					label="Gender"
					hide-details
					dense
					outlined
					required
				></v-select>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="4 my-0 py-0">
				<h4 class="font-weight-bold">Date of Birth:</h4>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="6 my-1 py-1">
				<v-row>
					<v-col cols="3 mr-0 pr-0 my-0 py-0">
						<v-text-field
							v-model="dateOfBirthMonth"
							:rules="dateOfBirthRules"
							class="mb-0 pb-0"
							label="MM"
							v-mask="'##'"
							dense
							hide-details
							outlined
							required
						></v-text-field>
					</v-col>
					<v-col cols="3 mx-1 px-1 my-0 py-0">
						<v-text-field
							v-model="dateOfBirthDay"
							:rules="dateOfBirthRules"
							class="mb-0 pb-0"
							label="DD"
							v-mask="'##'"
							dense
							hide-details
							outlined
							required
						></v-text-field>
					</v-col>
					<v-col cols="4 ml-0 pl-0 my-0 py-0">
						<v-text-field
							v-model="dateOfBirthYear"
							:rules="dateOfBirthRules"
							class="mb-0 pb-0"
							label="YYYY"
							v-mask="'####'"
							dense
							hide-details
							outlined
							required
						></v-text-field>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="4 my-0 py-0">
				<h4 class="font-weight-bold">Riding Location:</h4>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="5 mr-1 pr-1 my-1 py-1">
				<v-text-field
					v-model="city"
					@blur="onBlurCity"
					:rules="cityRules"
					label="City"
					append-icon="mdi-map-marker-radius"
					type="text"
					dense
					hide-details
					outlined
					required
				></v-text-field>
			</v-col>
			<v-col cols="2 ml-0 pl-0 my-1 py-1">
				<v-select
					v-model="state"
					:items="stateSelectItems"
					:rules="stateRules"
					label="State"
					dense
					hide-details
					outlined
					required
				></v-select>
			</v-col>
		</v-row>

		<v-checkbox
			class="my-1 py-1"
			:rules="termsAndConditionsRules"
			:value="termsAndConditions"
			label="I accept the Terms and Conditions."
			hide-details
			required
		></v-checkbox>

		<v-btn class="my-2 mr-1" color="success" type="submit">Submit</v-btn>
		<v-btn @click="cancel" class="my-2 ml-1" color="secondary">Close</v-btn>
	</v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "complete-registration-form",
	props: [],
	data() {
		return {
			valid: false,
			firstName: this.$store.state.registration.details.firstName,
			lastName: this.$store.state.registration.details.lastName,
			email: this.$store.state.registration.details.email,
			confirmEmail: "",
			password: this.$store.state.registration.details.password,
			confirmPassword: "",
			gender: "",
			dateOfBirthMonth: "",
			dateOfBirthDay: "",
			dateOfBirthYear: "",
			city: "",
			state: "",
			termsAndConditions: false,
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
			confirmEmailRules: [
				(v) => !!v || "Confirmation of email is required.",
				(v) => v === this.email || "Emails do not match.",
			],
			passwordRules: [
				(v) => !!v || "Password is a required field.",
				(v) =>
					(v && v.length <= 128) ||
					"Password must be less than 128 characters.",
			],
			confirmPasswordRules: [
				(v) => !!v || "Confirmation of password is required.",
				(v) => v === this.password || "Passwords do not match.",
			],
			genderRules: [(v) => !!v || "Gender selection is required."],
			dateOfBirthRules: [
				(v) => !!v || "All date of birth fields are required.",
			],
			cityRules: [(v) => !!v || "City is a required field."],
			stateRules: [(v) => !!v || "State selection is required."],
			termsAndConditionsRules: [
				(v) => !!v || "Must accept terms and conditions to continue.",
			],
			genderSelectItems: ["Male", "Female", "Non-binary", "Prefer not to say."],
			stateSelectItems: [
				"AL",
				"AK",
				"AS",
				"AZ",
				"AR",
				"CA",
				"CO",
				"CT",
				"DE",
				"DC",
				"FM",
				"FL",
				"GA",
				"GU",
				"HI",
				"ID",
				"IL",
				"IN",
				"IA",
				"KS",
				"KY",
				"LA",
				"ME",
				"MH",
				"MD",
				"MA",
				"MI",
				"MN",
				"MS",
				"MO",
				"MT",
				"NE",
				"NV",
				"NH",
				"NJ",
				"NM",
				"NY",
				"NC",
				"ND",
				"MP",
				"OH",
				"OK",
				"OR",
				"PW",
				"PA",
				"PR",
				"RI",
				"SC",
				"SD",
				"TN",
				"TX",
				"UT",
				"VT",
				"VI",
				"VA",
				"WA",
				"WV",
				"WI",
				"WY",
			],
		};
	},
	methods: {
		...mapActions({
			cancel: "registration/cancelRegistration",
			complete: "registration/completeRegistration",
		}),
		onBlurFirstName: function () {
			this.firstName = this.capitalize(this.firstName);
		},
		onBlurLastName: function () {
			this.lastName = this.capitalize(this.lastName);
		},
		onBlurCity: function () {
			this.city = this.capitalize(this.city);
		},
		capitalize: function (word) {
			var split = word.split();

			var capitalized = "";
			for (let partial of split) {
				capitalized += partial.charAt(0).toUpperCase() + partial.slice(1);
			}

			return capitalized;
		},
		onSubmit: function () {
			// TODO: Validate ALL (rest of) input...
			if (!this.$refs.registrationForm.validate()) {
				console.log("Form is in an error state.");
				return;
			} else {
				var combinedDOB =
					this.dateOfBirthMonth +
					"-" +
					this.dateOfBirthDay +
					"-" +
					this.dateOfBirthYear;

				this.complete({
					firstName: this.firstName,
					lastName: this.lastName,
					email: this.email,
					password: this.password,
					gender: this.gender,
					dob: combinedDOB,
					city: this.city,
					stateAbbrev: this.state,
				});
			}
		},
	},
};
</script>

<style scoped>
</style>