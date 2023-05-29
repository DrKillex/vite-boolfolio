import { reactive } from "vue";

export const store = reactive({
  apiBaseUrl: import.meta.env.VITE_BACKEND_API_URL,
  apiUrls: {
    records: '/records',
    types: '/types',
    technologies: '/technologies'
  },
  records: [],
  types: [],
  technologies: [],
  record: null,
  type: null,
  technology: null,
}
)