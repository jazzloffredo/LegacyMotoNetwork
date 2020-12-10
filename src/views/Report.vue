<template>
	<v-container class="pa-0">
		<report-form></report-form>
	</v-container>
</template>

<script>
import ReportForm from "@/components/report/forms/ReportForm.vue";

export default {
	name: "about",
	title: "MotoNetwork.US | Report",
	components: { ReportForm },
	data() {
		return {};
	},
};
</script>
