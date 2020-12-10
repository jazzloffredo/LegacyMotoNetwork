<template>
	<v-card elevation="8" light rounded>
		<v-alert outlined color="primary">
			<v-card-text class="py-0">
				<v-row>
					<v-col cols="2">
						<v-avatar color="primary">
							<span class="white--text">{{ initials }}</span>
						</v-avatar>
					</v-col>
					<v-col cols="10" align-self="center">
						<v-row> {{ author }} > {{ group }} </v-row>
						<v-row> Date Posted: {{ timestamp }}</v-row>
					</v-col>
				</v-row>

				<v-divider></v-divider>

				<v-row>
					<v-col class="pb-3" cols="12">
						<p class="mb-0">{{ content }}</p>
					</v-col>
				</v-row>

				<v-divider></v-divider>

				<v-row class="mt-2">
					<v-col cols="2">
						<v-card-actions>
							<v-btn @click="toggleIcon" color="success" small depressed>
								<v-icon>{{ likeIcon }}</v-icon>
							</v-btn>
						</v-card-actions>
					</v-col>
					<v-col cols="4" align-self="center"> Likes: {{ likes }} </v-col>
				</v-row>
			</v-card-text>
		</v-alert>
	</v-card>
</template>

<script>
export default {
	name: "post",
	props: ["author", "group", "content", "timestamp", "likes"],
	data() {
		return {
			likeIcon: "mdi-thumb-up-outline",
		};
	},
	computed: {
		initials: function () {
			return (
				this.author.split(" ")[0].charAt(0) +
				this.author.split(" ")[1].charAt(0)
			);
		},
	},
	methods: {
		toggleIcon: function () {
			if (this.likeIcon === "mdi-thumb-up-outline") {
				this.likeIcon = "mdi-thumb-up";
				this.incrementLikesCount();
			} else {
				this.likeIcon = "mdi-thumb-up-outline";
				this.decrementLikesCount();
			}
		},
		incrementLikesCount: function () {
			this.likes++;
		},
		decrementLikesCount: function () {
			this.likes--;
		},
	},
};
</script>

<style scoped>
</style>