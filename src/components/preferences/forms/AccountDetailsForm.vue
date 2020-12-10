<template>
	<v-form
		ref="accountDetailsForm"
		@submit.prevent="onSubmit"
		lazy-validation
		v-model="valid"
	>
		<v-row>
			<v-col cols="7 py-4">
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

		<v-divider></v-divider>

		<v-row>
			<v-col cols="7 py-4">
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

		<v-divider></v-divider>

		<v-row>
			<v-col cols="8 py-4">
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

		<v-divider></v-divider>

		<v-row>
			<v-col cols="5 py-4">
				<v-select
					v-model="gender"
					:items="genderSelectItems"
					:rules="genderRules"
					label="Gender"
					hide-details="auto"
					dense
					outlined
					required
				></v-select>
			</v-col>
		</v-row>

		<v-divider></v-divider>

		<v-row>
			<v-col cols="4 pb-0">
				<h4 class="font-weight-bold">Date of Birth:</h4>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="6 py-0">
				<v-row>
					<v-col cols="3 pt-2 pb-4 mr-0 pr-0">
						<v-text-field
							v-model="dateOfBirthMonth"
							:rules="dateOfBirthRules"
							label="MM"
							v-mask="'##'"
							dense
							hide-details
							outlined
							required
						></v-text-field>
					</v-col>
					<v-col cols="3 pt-2 pb-4 mx-1 px-1">
						<v-text-field
							v-model="dateOfBirthDay"
							:rules="dateOfBirthRules"
							label="DD"
							v-mask="'##'"
							dense
							hide-details
							outlined
							required
						></v-text-field>
					</v-col>
					<v-col cols="4 pt-2 pb-4 ml-0 pl-0">
						<v-text-field
							v-model="dateOfBirthYear"
							:rules="dateOfBirthRules"
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

		<v-divider></v-divider>

		<v-row>
			<v-col cols="4 pb-0">
				<h4 class="font-weight-bold">Riding Location:</h4>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="6 pt-2 pb-4 mr-1 pr-1">
				<v-text-field
					v-model="city"
					@blur="onBlurCity"
					:rules="cityRules"
					label="City"
					append-icon="mdi-map-marker-radius"
					type="text"
					hide-details="auto"
					dense
					outlined
					required
				></v-text-field>
			</v-col>
			<v-col cols="2 pt-2 pb-4 ml-0 pl-0">
				<v-select
					v-model="state"
					:items="stateSelectItems"
					:rules="stateRules"
					label="State"
					hide-details="auto"
					dense
					outlined
					required
				></v-select>
			</v-col>
		</v-row>

		<v-divider></v-divider>

		<v-btn class="mt-3 mb-1 mr-1" color="success" type="submit">Update</v-btn>
	</v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "account-details-form",
	props: [],
	data() {
		return {
			valid: false,
			firstName: this.$store.state.user.accountDetails.firstName,
			lastName: this.$store.state.user.accountDetails.lastName,
			email: this.$store.state.user.accountDetails.email,
			gender: this.$store.state.user.accountDetails.gender,
			dateOfBirthMonth: this.$store.state.user.accountDetails.dob.split("-")[0],
			dateOfBirthDay: this.$store.state.user.accountDetails.dob.split("-")[1],
			dateOfBirthYear: this.$store.state.user.accountDetails.dob.split("-")[2],
			city: this.$store.state.user.accountDetails.city,
			state: this.$store.state.user.accountDetails.stateAbbrev,
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
			genderRules: [(v) => !!v || "Gender selection is required."],
			dateOfBirthRules: [
				(v) => !!v || "All date of birth fields are required.",
			],
			cityRules: [(v) => !!v || "City is a required field."],
			stateRules: [(v) => !!v || "State selection is required."],
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
			update: "user/updateUser",
		}),
		onSubmit: async function () {
			var combinedDOB =
				this.dateOfBirthMonth +
				"-" +
				this.dateOfBirthDay +
				"-" +
				this.dateOfBirthYear;

			await this.update({
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				gender: this.gender,
				dob: combinedDOB,
				city: this.city,
				stateAbbrev: this.state,
			});
		},
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
	},
};
</script>

<style scoped>
</style>