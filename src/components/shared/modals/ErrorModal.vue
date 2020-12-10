<template>
	<v-row justify="center">
		<v-dialog v-model="show" max-width="500px">
			<v-card>
				<v-card-actions>
					<v-btn color="primary" flat @click.stop="show = false">Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
export default {
	name: "error-modal",
	props: {
		value: Boolean,
	},
	computed: {
		show: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit("input", value);
			},
		},
	},
};
</script>

<style scoped>
</style>