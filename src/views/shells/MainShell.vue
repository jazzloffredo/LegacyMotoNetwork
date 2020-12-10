<template>
	<!-- INNER APP SHELL -->
	<v-container class="pa-0" fluid>
		<v-row>
			<navigation-bar></navigation-bar>
		</v-row>
		<v-row class="mt-4">
			<v-col class="ml-12 mr-4" cols="3">
				<profile-card></profile-card>
			</v-col>
			<v-col class="ml-4" cols="5">
				<router-view></router-view>
			</v-col>
		</v-row>
		<footer-section></footer-section>
	</v-container>
</template>

<script>
import FooterSection from "@/components/shared/misc/FooterSection.vue";
import NavigationBar from "@/components/shared/navigation/NavigationBar.vue";
import ProfileCard from "@/components/shared/cards/ProfileCard.vue";

export default {
	name: "inner-app-shell",
	components: {
		FooterSection,
		NavigationBar,
		ProfileCard,
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style scoped>
</style>