<template>
	<v-container class="pa-0">
		<v-row v-for="i in rows" :key="i">
			<v-col cols="6">
				<small-group-card
					:groupName="groups[(i - 1) * 2].name.substring(0, 12)"
					:groupAbbrev="groups[(i - 1) * 2].abbrev"
					:membersCount="groups[(i - 1) * 2].members"
				></small-group-card>
			</v-col>
			<v-col cols="6" v-if="(i - 1) * 2 + 1 < groups.length">
				<small-group-card
					:groupName="groups[(i - 1) * 2 + 1].name.substring(0, 12)"
					:groupAbbrev="groups[(i - 1) * 2 + 1].abbrev"
					:membersCount="groups[(i - 1) * 2 + 1].members"
				></small-group-card>
			</v-col>
			<v-col cols="6" v-if="i === rows && (i - 1) * 2 + 1 === groups.length">
				<new-group-card></new-group-card
			></v-col>
		</v-row>
	</v-container>
</template>

<script>
import NewGroupCard from "@/components/groups/cards/NewGroupCard.vue";
import SmallGroupCard from "@/components/groups/cards/SmallGroupCard.vue";

export default {
	name: "groups",
	components: { NewGroupCard, SmallGroupCard },
	data() {
		return {
			groups: [
				{
					name: "MSF Coaches",
					abbrev: "MSF",
					members: "25",
				},
				{
					name: "Sportbike Society",
					abbrev: "SPRT",
					members: "103",
				},
				{
					name: "KC Moto Group",
					abbrev: "KCMG",
					members: "12",
				},
				{
					name: "MOKAN Adventure Riders",
					abbrev: "MAR",
					members: "1232",
				},
				{
					name: "BMW Enthusiasts",
					abbrev: "BMW",
					members: "32",
				},
				{
					name: "Gearheads",
					abbrev: "GRH",
					members: "327",
				},
				{
					name: "Just Cruisin'",
					abbrev: "JC",
					members: "671",
				},
				{
					name: "Backroad Riders",
					abbrev: "BR",
					members: "281",
				},
				{
					name: "Gas Guzzlers",
					abbrev: "GG",
					members: "721",
				},
			],
		};
	},
	computed: {
		rows() {
			return Math.ceil((this.groups.length + 1) / 2);
		},
	},
};
</script>
