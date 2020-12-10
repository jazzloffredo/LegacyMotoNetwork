<template>
	<v-card @click="onClick" hover light ripple rounded>
		<v-alert outlined color="primary">
			<v-card-text class="py-0">
				<v-row class="d-flex justify-center mb-2">
					<v-col cols="4">
						<v-avatar color="primary">
							<span class="white--text">{{ groupAbbrev }}</span>
						</v-avatar>
					</v-col>
					<v-col cols="8" align-self="center">
						<v-row>
							<h3 v-if="groupName.length < 12">{{ groupName }}</h3>
							<h3 v-else>{{ groupName }}...</h3>
						</v-row>
						<v-row>
							<h4>Members: {{ membersCount }}</h4>
						</v-row>
					</v-col>
				</v-row>
			</v-card-text>
		</v-alert>
	</v-card>
</template>

<script>
// @ is an alias to /src

export default {
	name: "small-group-card",
	props: ["groupName", "groupAbbrev", "membersCount"],
	components: {},
	data() {
		return {};
	},
	methods: {
		onClick: function () {
			console.log("Click...");
		},
	},
};
</script>
