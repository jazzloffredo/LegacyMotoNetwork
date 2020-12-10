<template>
	<v-card @click="onClick" hover light ripple rounded>
		<v-alert outlined color="primary">
			<v-card-text class="py-0">
				<v-row class="d-flex justify-center mb-2">
					<v-col cols="4">
						<v-card-actions class="pa-0">
							<v-btn color="success" fab small depressed>
								<v-icon>mdi-plus</v-icon>
							</v-btn>
						</v-card-actions>
					</v-col>
				</v-row>
			</v-card-text>
		</v-alert>
	</v-card>
</template>

<script>
// @ is an alias to /src

export default {
	name: "new-group-card",
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
