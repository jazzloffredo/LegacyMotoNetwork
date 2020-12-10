<template>
	<v-app>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "App",
	components: {},
	data: () => ({
		//
	}),
	methods: {
		...mapActions({
			loadSession: "authentication/loadSession",
			loadUser: "user/loadUser",
		}),
	},
	async mounted() {
		var prevUUID = await this.loadSession();
		if (prevUUID) {
			await this.loadUser(prevUUID);
			this.$router.push("/feed");
		}
	},
};
</script>

<style scoped>
html,
body {
	margin: 0px !important;
	padding: 0px !important;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>