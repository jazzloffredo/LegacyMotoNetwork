<template>
	<v-card elevation="20" outlined shaped light>
		<v-card-title class="h6 tertiary white--text py-2 px-4 ma-0">
			Complete your registration.
		</v-card-title>
		<v-card-text class="py-2 my-0">
			<complete-registration-form></complete-registration-form>
		</v-card-text>
	</v-card>
</template>

<script>
import CompleteRegistrationForm from "@/components/landing/forms/CompleteRegistrationForm.vue";

export default {
	name: "complete-registration-card",
	components: {
		CompleteRegistrationForm,
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