<template>
  <b-dropdown variant="outline-primary">
    <b-dropdown-item>
      <img src="~/assets/icons/trash-2.svg" alt="">
      <span class="delete">Delete</span>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="~/assets/icons/flag.svg" alt="flag">
      <span class="report">Report</span>
    </b-dropdown-item>
  </b-dropdown>
</template>

<style lang="scss" scoped>
.delete{
    color: $cancel-red;
}
</style>
