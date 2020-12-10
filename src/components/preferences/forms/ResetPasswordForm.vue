<template>
	<v-form
		ref="resetPasswordForm"
		@submit.prevent="onSubmit"
		lazy-validation
		v-model="valid"
	>
		<v-row>
			<v-col cols="8 pb-0">
				<v-text-field
					v-model="oldPassword"
					:rules="passwordRules"
					:counter="128"
					append-icon="mdi-lock"
					hide-details="auto"
					label="Current Password"
					type="password"
					dense
					outlined
					required
				></v-text-field>
			</v-col>
		</v-row>

		<v-divider></v-divider>

		<v-row>
			<v-col cols="8 pt-5 pb-0">
				<v-text-field
					v-model="newPassword"
					:rules="passwordRules"
					:counter="128"
					append-icon="mdi-lock"
					hide-details="auto"
					label="New Password"
					type="password"
					dense
					outlined
					required
				></v-text-field>
			</v-col>
		</v-row>

		<v-divider></v-divider>

		<v-row>
			<v-col cols="8 pt-5 pb-0">
				<v-text-field
					v-model="confirmNewPassword"
					:rules="confirmPasswordRules"
					:counter="128"
					append-icon="mdi-lock"
					hide-details="auto"
					label="Confirm New Password"
					type="password"
					dense
					outlined
					required
					validate-on-blur
				></v-text-field>
			</v-col>
		</v-row>

		<v-divider></v-divider>

		<v-btn class="mt-3 mb-1 mr-1" color="success" type="submit">Confirm</v-btn>
	</v-form>
</template>

<script>
export default {
	name: "reset-password-form",
	props: [],
	data() {
		return {
			valid: false,
			oldPassword: "",
			newPassword: "",
			confirmNewPassword: "",
			passwordRules: [
				(v) => !!v || "Password is a required field.",
				(v) =>
					(v && v.length <= 128) ||
					"Password must be less than 128 characters.",
			],
			confirmPasswordRules: [
				(v) => !!v || "Confirmation of password is required.",
				(v) => v === this.newPassword || "New passwords do not match.",
			],
		};
	},
	methods: {
		onSubmit: function () {
			console.log("submit");
		},
	},
};
</script>

<style scoped>
</style>