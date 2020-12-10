<template>
	<v-container class="fill-height" fluid>
		<v-card outlined shaped elevation="20">
			<v-card-title class="h6 secondary-bg white--text py-2 px-4 ma-0">
				Don't have an account? Register today!
			</v-card-title>
			<v-card-text class="py-2 my-0">
				<registration-form></registration-form>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import RegistrationForm from "@/components/landing/forms/RegistrationForm.vue";

export default {
	name: "registration-card",
	components: {
		RegistrationForm,
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