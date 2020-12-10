<template>
	<v-expansion-panels dark hover multiple>
		<v-expansion-panel v-for="(item, i) in questions.length" :key="i">
			<v-expansion-panel-header color="primary">
				{{ questions[i] }}
			</v-expansion-panel-header>
			<v-expansion-panel-content class="pt-2" color="secondary_accent">
				{{ responses[i] }}
			</v-expansion-panel-content>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<script>
// @ is an alias to /src

export default {
	name: "about",
	title: "MotoNetwork.US | About",
	data() {
		return {
			questions: [
				"What inspired you to develop this application?",
				"How does this application differ from Facebook/Twitter/etc.?",
				"Why should I use this application over Facebook/Twitter/etc.?",
				"Is my data secure and/or being sold for profit?",
				"How do I add/remove motorcycles from my garage?",
				"What is the purpose of the logbook?",
				"I think I broke something...what do I do?",
				"I have a feature request/idea...how do I share it?",
				"I am interested in helping develop the application...where do I apply?",
				"I don't see my question listed...what do I do?",
			],
			responses: [
				"After taking the BRC through the Motorcycle Safety Foundation, I quickly grew to love the thrill of being on two wheels. Something I noticed, however, was the difficulty in finding others to ride with - riding alone can become very tiresome. I decided to utilize my knowledge as a software to developer to fill the exisiting hole in the social media/motorcyclist market.",
				'At its core, some may consider this to be "just another social media application." However, I would argue that it is much more than that.',
				"This application is specifically built with the intention of serving the needs of motorcyclists and the motorcycling community as a whole. Furthermore, ",
				"All data is encrypted and stored remotely in the cloud. Of course, there is always the chance of a vulnerability being exploited, however, we take every precaution to continously test and analyze any potential vulnerabilities in our application. We do not currently, nor do we ever intend to, sell our user's private information for profit.",
				"This can be accomplished through the preferences tab. You can navigate to the preferences page by clicking the button labeled 'Preferences' on your profile card, or by clicking 'Preferences' in the footer. Once on the preferences page, scroll all the way to the bottom and, from there, you can either edit, remove, or create motorcycles.",
				"The 'Logbook' is an interactive method of tracking how many miles you have ridden overall. It is completely optional. In future iterations, we hope to automate mileage tracking by integrating with various APIs.",
				"Unfortunately, sometimes a bug or two will slip past us developers. Please use the 'Report an Issue' button on your profile card to send an email to the developers. The more details you can provide about the issue (what happened, what might have caused it, how to reproduce it, etc.) are vital to correcting the problem.",
				"New ideas can be suggested on the application's GitHub repository page.",
				"We are always looking for individuals that would like to help build this application. You can reach out directly to the creator, jloffredo@ksu.edu, or visit the GitHub repository page for more information.",
				"These are typically the most frequently asked questions. If you have a need for immediate assistance, please either use the 'Report an Issue' option or visit the application's GitHub repository page.",
			],
		};
	},
	components: {},
};
</script>
