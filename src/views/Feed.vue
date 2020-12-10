<template>
	<v-container class="pa-0">
		<v-row v-for="i in posts.length" :key="i">
			<v-col cols="10">
				<post
					:author="posts[i - 1].author"
					:group="posts[i - 1].group"
					:content="posts[i - 1].content"
					:timestamp="posts[i - 1].timestamp"
					:likes="posts[i - 1].likes"
				></post>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Post from "@/components/feed/Post.vue";

export default {
	name: "feed",
	title: "MotoNetwork.US | Feed",
	components: { Post },
	data() {
		return {
			posts: [
				{
					author: "Jazz Loffredo",
					group: "BMW Enthusiasts",
					content:
						"Hello motorcycling world! This is my first post. Please join my group, 'BMW Enthusiasts' to get all information BMW related! I can't wait to connect with more of you and hopefully meet up to ride. Cya!",
					timestamp: "12-06-2020",
					likes: "1293",
				},
				{
					author: "Jimmy Bowie",
					group: "Gas Guzzlers",
					content:
						"Hi all, just made a new group called 'Gas Guzzlers.' We pride ourselves in going the distance. If you love to ride for hours on end, then this is the group for you.",
					timestamp: "12-02-2020",
					likes: "34",
				},
				{
					author: "Evil Knievel",
					group: "Stunt Riders",
					content:
						"Yo yo yo, it's Evil Knievel here! If you're looking to do some crazy stunts, meet me in Manhattan, KS at 6:00pm tonight. We're going to try and jump Manhattan High School!",
					timestamp: "12-01-2020",
					likes: "1702021",
				},
			],
		};
	},
};
</script>
