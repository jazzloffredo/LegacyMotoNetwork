<template>
	<div class="bg">
		<v-container fluid>
			<v-row>
				<v-col class="pl-6">
					<i><h1 class="white--text font-weight-bold">MotoNetwork.US</h1></i>
					<vue-typed-js
						:strings="[
							'Ride safe.^1000 ^40Ride spirited.^1000 ^40Ride together.',
						]"
						:startDelay="1000"
						:backDelay="3000"
						:backSpeed="50"
						:loop="true"
					>
						<h4 class="white--text font-weight-bold">
							<span class="typing"></span>
						</h4>
					</vue-typed-js>
				</v-col>
				<v-col class="px-4 mx-8">
					<v-layout row wrap justify-end>
						<v-flex shrink>
							<login-card></login-card>
						</v-flex>
					</v-layout>
					<v-layout row wrap justify-end>
						<v-flex shrink>
							<registration-card></registration-card>
						</v-flex>
					</v-layout>
				</v-col>
			</v-row>
			<complete-registration-modal
				:show="showModal"
			></complete-registration-modal>
		</v-container>
	</div>
</template>

<script>
import LoginCard from "@/components/landing/cards/LoginCard.vue";
import RegistrationCard from "@/components/landing/cards/RegistrationCard.vue";
import CompleteRegistrationModal from "@/components/landing/modals/CompleteRegistrationModal.vue";

import { mapState } from "vuex";

export default {
	name: "landing",
	title: "MotoNetwork.US | Landing",
	components: {
		LoginCard,
		RegistrationCard,
		CompleteRegistrationModal,
	},
	data() {
		return {};
	},
	computed: {
		...mapState({
			showModal: (state) => state.registration.showCompleteRegistrationModal,
		}),
	},
	methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,700&display=swap");

h1 {
	font-family: "Ubuntu", sans-serif;
	font-size: 48px;
}

.bg {
	background-image: url("../assets/images/bg-landing.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
}
</style>
