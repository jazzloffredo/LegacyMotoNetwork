<template>
	<v-row>
		<v-col cols="12" class="pt-0">
			<account-details-card></account-details-card>
		</v-col>
		<v-col cols="12">
			<reset-password-card></reset-password-card>
		</v-col>
		<v-col cols="12">
			<garage-card></garage-card>
		</v-col>
	</v-row>
</template>

<script>
import AccountDetailsCard from "@/components/preferences/cards/AccountDetailsCard.vue";
import GarageCard from "@/components/preferences/cards/GarageCard.vue";
import ResetPasswordCard from "@/components/preferences/cards/ResetPasswordCard.vue";

export default {
	name: "preferences",
	title: "MotoNetwork.US | Preferences",
	components: {
		AccountDetailsCard,
		GarageCard,
		ResetPasswordCard,
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style scoped>
</style>