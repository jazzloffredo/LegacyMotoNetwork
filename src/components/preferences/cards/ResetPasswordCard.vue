<template>
	<v-card elevation="8" outlined rounded light>
		<v-card-title class="h6 tertiary white--text py-2 px-4 ma-0">
			<v-icon large class="mr-2">mdi-form-textbox-password</v-icon>
			<span> Change Password </span>
			<v-spacer></v-spacer>
			<!--
			<v-card-actions class="pa-0">
				<v-btn color="primary" fab x-small depressed>
					<v-icon>mdi-window-minimize</v-icon>
				</v-btn>
			</v-card-actions>
			-->
		</v-card-title>
		<v-card-text class="py-2 my-0">
			<reset-password-form></reset-password-form
		></v-card-text>
	</v-card>
</template>

<script>
import ResetPasswordForm from "@/components/preferences/forms/ResetPasswordForm.vue";

export default {
	name: "reset-password-card",
	components: {
		ResetPasswordForm,
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style scoped>
.secondary-bg {
	background-color: var(--v-secondary-base);
}

.tertiary-bg {
	background-color: var(--v-tertiary-base);
}
</style>