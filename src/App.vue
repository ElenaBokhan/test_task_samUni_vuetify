<template>
	<v-app>
		<v-container fluid >
			<v-main>
				<users />
			</v-main>
		</v-container>
	</v-app>
</template>

<script>
import users from "./containers/Users";

export default {
	name: "App",
	components: {
		users,
	},
	data: () => ({}),
};
</script>
<style>
.container {
  max-width: 100%;
  min-height: 100%;
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
}
main{
  width: 60%;
  margin: 40px auto;
}
</style>