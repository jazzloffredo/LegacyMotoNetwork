<template>
	<v-card elevation="8" light shaped>
		<v-alert outlined color="primary">
			<v-card-text class="py-0">
				<v-row class="d-flex justify-center mb-2">
					<v-avatar color="primary" size="72">
						<span class="white--text headline">{{ initials }}</span>
					</v-avatar>
				</v-row>
				<v-row class="d-flex justify-center my-2">
					<h2>{{ fullName }}</h2>
				</v-row>

				<v-divider class="secondary_accent"></v-divider>

				<v-row class="d-flex justify-center mt-1">
					<span class="text-overline">
						{{ location }}
					</span>
				</v-row>

				<v-row class="d-flex justify-center">
					<span class="text-overline">
						{{ primary }}
					</span>
				</v-row>

				<v-row class="d-flex justify-center mb-1">
					<span class="text-overline">
						{{ distance }}
					</span>
				</v-row>

				<v-divider class="secondary_accent"></v-divider>

				<v-row class="mt-2 px-2">
					<v-navigation-drawer permanent floating>
						<v-list dense nav>
							<v-list-item
								v-for="link in links"
								:key="link.title"
								@click="link.action"
								link
							>
								<v-list-item-icon>
									<v-icon>{{ link.icon }}</v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>{{ link.title }}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-navigation-drawer>
				</v-row>
			</v-card-text>
		</v-alert>
	</v-card>
</template>

<script>
export default {
	name: "profile-card",
	data() {
		return {
			city: "Lenexa",
			state: "KS",
			primaryMotorcycle: {
				year: "2013",
				make: "BMW",
				model: "R1200GS",
			},
			miles: "12,473",
			links: [
				{
					title: "My Feed",
					icon: "mdi-comment-quote",
					action: () => this.navigate("/feed"),
				},
				{
					title: "My Groups",
					icon: "mdi-account-group",
					action: () => this.navigate("/groups"),
				},
				{
					title: "Logbook",
					icon: "mdi-math-log",
					action: () => this.navigate("/logbook"),
				},
				{
					title: "Preferences",
					icon: "mdi-cog",
					action: () => this.navigate("/preferences"),
				},
				{
					title: "About/FAQ",
					icon: "mdi-information-outline",
					action: () => this.navigate("/about"),
				},
				{
					title: "Report an Issue",
					icon: "mdi-alert",
					action: () => this.navigate("/report"),
				},
			],
		};
	},
	computed: {
		initials: function () {
			return this.firstName.charAt(0) + this.lastName.charAt(0);
		},
		firstName: function () {
			return this.$store.state.user.accountDetails.firstName;
		},
		lastName: function () {
			return this.$store.state.user.accountDetails.lastName;
		},
		fullName: function () {
			return this.firstName + " " + this.lastName;
		},
		location: function () {
			return this.city + ", " + this.state;
		},
		primary: function () {
			return (
				this.primaryMotorcycle.year +
				" " +
				this.primaryMotorcycle.make +
				" " +
				this.primaryMotorcycle.model
			);
		},
		distance: function () {
			return "Logged Miles: " + this.miles;
		},
	},
	methods: {
		navigate: function (link) {
			this.$router.push(link);
		},
	},
};
</script>

<style scoped>
</style>