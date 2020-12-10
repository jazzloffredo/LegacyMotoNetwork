<template>
	<v-footer color="primary lighten-1" padless>
		<v-row justify="center" no-gutters>
			<v-btn
				v-for="link in links"
				:key="link"
				color="white"
				text
				rounded
				class="my-2"
			>
				{{ link }}
			</v-btn>
			<v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
				Copyright &#169; {{ new Date().getFullYear() }} —
				<strong>MotoNetwork.US</strong>
			</v-col>
		</v-row>
	</v-footer>
</template>

<script>
export default {
	name: "footer-section",
	props: [],
	mounted() {},
	data() {
		return {
			links: [
				"Home",
				"Groups",
				"Logbook",
				"Preferences",
				"About/FAQ",
				"Report an Issue",
			],
		};
	},
	methods: {},
	computed: {},
};
</script>

<style scoped>
</style>
