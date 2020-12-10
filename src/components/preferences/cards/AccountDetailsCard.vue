<template>
	<v-card elevation="8" outlined rounded light>
		<v-card-title class="h6 tertiary white--text py-2 px-4 ma-0">
			<v-icon large class="mr-2">mdi-card-account-details-outline</v-icon>
			<span>Account Details</span>
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
			<account-details-form></account-details-form
		></v-card-text>
	</v-card>
</template>

<script>
import AccountDetailsForm from "@/components/preferences/forms/AccountDetailsForm.vue";

export default {
	name: "account-details-card",
	components: {
		AccountDetailsForm,
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