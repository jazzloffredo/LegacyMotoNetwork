<template>
	<v-toolbar dense color="primary">
		<img
			class="mx-2"
			:src="require('@/assets/images/motorcycle.svg')"
			height="50"
		/>

		<v-toolbar-title class="white--text font-weight-bold mx-2">
			MotoNetwork.US
		</v-toolbar-title>

		<v-btn @click="onHomeClick" color="primary" depressed>
			<v-icon class="pr-1">mdi-home-circle-outline</v-icon>
			Home
		</v-btn>

		<v-btn @click="onGroupsClick" color="primary" depressed>
			<v-icon class="pr-1">mdi-account-group</v-icon>
			Groups
		</v-btn>

		<v-text-field
			class="mx-2"
			placeholder="Lookup..."
			append-icon="mdi-magnify"
			dense
			flat
			hide-details
			rounded
			solo
		></v-text-field>

		<v-spacer></v-spacer>

		<h4 class="white--text mx-3">Welcome, {{ fullName }}.</h4>

		<v-btn @click="onSignOut" class="white--text mx-2" outlined>
			Sign Out
			<v-icon class="pl-1">mdi-logout-variant</v-icon>
		</v-btn>
	</v-toolbar>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "navigation-bar",
	data() {
		return {
			navItems: [],
		};
	},
	computed: {
		firstName: function () {
			return this.$store.state.user.accountDetails.firstName;
		},
		lastName: function () {
			return this.$store.state.user.accountDetails.lastName;
		},
		fullName: function () {
			return this.firstName + " " + this.lastName;
		},
	},
	methods: {
		...mapActions({
			logout: "authentication/logout",
		}),
		onHomeClick: function () {
			this.$router.push("/feed");
		},
		onGroupsClick: function () {
			this.$router.push("/groups");
		},
		onSignOut: async function () {
			await this.logout();
			this.$router.push("/landing");
		},
	},
};
</script>
<style></style>
