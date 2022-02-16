import { defineStore } from "pinia";

export const useSessionColorStore = defineStore("sessionColorStore", {
  state: () => {
    return {
      colors: [
        { name: "red", tailwindClass: "red-500", hex: "#ef4444", id: 1 },
        { name: "orange", tailwindClass: "orange-500", hex: "#fb923c", id: 2 },
        { name: "amber", tailwindClass: "amber-400", hex: "#fbbf24", id: 3 },
        { name: "lime", tailwindClass: "lime-500", hex: "#84cc16", id: 4 },
        { name: "green", tailwindClass: "green-500", hex: "#22c55e", id: 5 },
        { name: "teal", tailwindClass: "teal-800", hex: "#115e59", id: 6 },
        { name: "sky", tailwindClass: "sky-500", hex: "#0ea5e9", id: 7 },
        { name: "blue", tailwindClass: "blue-700", hex: "#1d4ed8", id: 8 },
        { name: "violet", tailwindClass: "violet-400", hex: "#a78bfa", id: 9 },
        { name: "purple", tailwindClass: "purple-600", hex: "#9333ea", id: 10 },
        { name: "fuchsia", tailwindClass: "fuchsia-800", hex: "#86198f", id: 11 },
        { name: "pink", tailwindClass: "pink-500", hex: "#ec4899", id: 12 },
        { name: "gray-light", tailwindClass: "gray-500", hex: "#6b7280", id: 13 },
        { name: "gray-dark", tailwindClass: "gray-800", hex: "#1f2937", id: 14 },
      ],
      selectedColor: null,
    };
  },
  getters: {
    allColors: (state) => state.colors,
  },
  actions: {
    getColor(id) {
      const foundColor = this.colors.find((color) => color.id === id);
      return foundColor;
    },
    setSelectedColor(id) {
      const foundColor = this.colors.find((color) => color.id === id);
      this.selectedColor = foundColor;
    },
  },
});
