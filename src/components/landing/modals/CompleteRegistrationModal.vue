<template>
	<v-bottom-sheet v-model="show">
		<v-row>
			<v-col class="mx-5 mb-2" cols="7">
				<complete-registration-card></complete-registration-card>
			</v-col>
		</v-row>
	</v-bottom-sheet>
</template>

<script>
import CompleteRegistrationCard from "@/components/landing/cards/CompleteRegistrationCard.vue";

export default {
	name: "complete-registration-modal",
	components: {
		CompleteRegistrationCard,
	},
	props: {
		show: Boolean,
	},
};
</script>

<style scoped>
</style>