<template>
  <h1 class="inline-flex mb-8 text-2xl font-bold">{{ t("button.about") }}</h1>

  <form>
    <p>
      <label>
        Your Name: <input type="text" name="name" v-model="form.name" />
      </label>
    </p>
    <p>
      <label>
        Your Email: <input type="email" name="email" v-model="form.email" />
      </label>
    </p>
    <p>
      <label>
        Message: <textarea name="message" v-model="form.message" />
      </label>
    </p>
    <p>
      <button type="submit" @click.prevent="handleSubmit">Send</button>
    </p>
  </form>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t } = useI18n()
import { useHead } from "@vueuse/head"

useHead({
  title: "About - Liyas Thomas",
})

const form = {
  name: "",
  email: "",
  message: "",
}

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

const handleSubmit = () => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...form }),
  })
    .then(() => alert("Success!"))
    .catch((error) => alert(error))
}
</script>
