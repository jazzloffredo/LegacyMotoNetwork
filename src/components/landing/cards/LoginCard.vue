<template>
	<v-container class="fill-height" fluid>
		<v-card outlined shaped elevation="20">
			<v-card-title class="h6 confirmation-bg white--text py-2 px-4 ma-0">
				Already have an account? Sign in!
			</v-card-title>
			<v-card-text class="py-2 my-0">
				<login-form></login-form>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import LoginForm from "@/components/landing/forms/LoginForm.vue";

export default {
	name: "login-card",
	components: {
		LoginForm,
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style scoped>
.confirmation-bg {
	background-color: var(--v-confirmation-base);
}

/* Modifying Custom Vuetify Properties */
/*
  .theme--light.v-sheet--outlined {  
    border: thin solid var(--v-tertiary-base);
  }
  */
</style>