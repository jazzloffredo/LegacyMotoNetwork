<template>
	<div>
		<v-container
			class="py-0"
			v-for="motorcycle in motorcycles"
			:key="motorcycle.model"
		>
			<v-row align="center">
				<v-btn color="error" fab x-small><v-icon>mdi-delete</v-icon></v-btn>
				<v-btn color="primary ml-3" fab x-small>
					<v-icon>mdi-pencil-outline</v-icon>
				</v-btn>
				<v-col cols="2" class="pr-1">
					<v-text-field
						label="Year"
						type="text"
						:value="motorcycle.year"
						dense
						disabled
						hide-details
						outlined
						required
					></v-text-field>
				</v-col>
				<v-col cols="3" class="px-1">
					<v-text-field
						label="Make"
						type="text"
						:value="motorcycle.make"
						dense
						disabled
						hide-details
						outlined
						required
					></v-text-field>
				</v-col>
				<v-col cols="4" class="pl-1">
					<v-text-field
						label="Model"
						type="text"
						:value="motorcycle.model"
						dense
						disabled
						hide-details
						outlined
						required
					></v-text-field>
				</v-col>
			</v-row>
		</v-container>
		<v-container>
			<v-row align="center">
				<v-btn color="success" fab x-small><v-icon>mdi-plus</v-icon></v-btn>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	name: "garage-form",
	props: [],
	data() {
		return {
			motorcycles: [
				{
					make: "BMW",
					model: "R1200 GS",
					year: "2013",
				},
				{
					make: "Honda",
					model: "CBR600RR",
					year: "2005",
				},
				{
					make: "Kawasaki",
					model: "Vulcan S",
					year: "2015",
				},
			],
		};
	},
	methods: {
		onSubmit: function () {
			console.log("submit");
		},
	},
};
</script>

<style scoped>
</style>