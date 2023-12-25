import { create } from "zustand";

export const useDrawerStore = create((set) => ({
  isDrawerOpen: false,
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
}));

export const useAccordionStore = create((set) => ({
  name: "Segunda Guerra Mundial",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit magni ducimus nihil quibusdam culpa suscipit consequuntur molestias aliquam consectetur a reprehenderit qui sunt voluptatem architecto voluptas praesentium, officia corrupti!",
  setName: (name) => set(() => ({ name: name })),
  setContent: (content) => set(() => ({ content: content })),
}));

export const useChronologyStore = create(() => ({
  chronologyInfos: [
    {
      id: 1,
      name: "Primeira Guerra",
      subs: [
        {
          id: 1,
          name: "Consequências",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolor eum deserunt obcaecati laudantium non sit, atque, pariatur dignissimos quae, ipsa cum qui? Laboriosam velit non minima, impedit ea aliquam.",
          selected: false,
        },
      ],
    },
    {
      id: 2,
      name: "Tratado de Versalhes",
      subs: [
        {
          id: 1,
          name: "Cláusulas",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi vel ullam doloremque totam expedita, asperiores eos ratione, cum a itaque laboriosam saepe repellat voluptate animi fugit illum est ad. Illo.",
          selected: false,
        },
      ],
    },
    {
      id: 3,
      name: "1939",
      subs: [
        {
          id: 1,
          name: "Invasão da Polônia",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quam aspernatur dolore possimus autem recusandae iste assumenda quibusdam, debitis reiciendis veniam laudantium deleniti enim! Quos aspernatur neque quibusdam dolores quae.",
          selected: false,
        },
      ],
    },
    {
      id: 4,
      name: "1940",
      subs: [
        {
          id: 1,
          name: "Queda da França",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, ratione error ad aspernatur asperiores vitae nisi optio delectus et, tempora, fugiat numquam iure non. Accusantium illum aliquam ullam vel doloremque.",
          selected: false,
        },
      ],
    },
    {
      id: 5,
      name: "1941",
      subs: [
        {
          id: 1,
          name: "Invasão da União Soviética",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, error alias itaque quae vel molestias nihil suscipit atque, tempore sunt illo sed explicabo quos qui vitae iure vero a laboriosam?",
          selected: false,
        },
        {
          id: 2,
          name: "Ataque a Pearl Harbor",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, tenetur laborum quam deserunt sit ipsam, itaque molestias ab voluptatem soluta accusamus obcaecati excepturi aliquam aliquid tempora facilis quas quae perspiciatis.",
          selected: false,
        },
      ],
    },
    {
      id: 6,
      name: "1942",
      subs: [
        {
          id: 1,
          name: "Batalha de Stalingrado",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore quo porro dicta facilis, ad veniam laborum voluptatem at recusandae sapiente nemo magni? Rem illum error distinctio id molestias! Voluptas?",
          selected: false,
        },
      ],
    },
    {
      id: 7,
      name: "1943",
      subs: [
        {
          id: 1,
          name: "Derrota Alemã em Stalingrado",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ab enim perferendis facilis adipisci impedit et eos cum! Blanditiis laboriosam dolor hic nemo itaque possimus veniam expedita, quas fugit? Nesciunt?",
          selected: false,
        },
      ],
    },
    {
      id: 8,
      name: "1944",
      subs: [
        {
          id: 1,
          name: "Dia D",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam alias velit eveniet distinctio impedit, unde consequatur? Quaerat sequi excepturi, beatae ducimus nulla ab repellat, accusamus quia, placeat suscipit cum numquam!",
          selected: false,
        },
      ],
    },
    {
      id: 9,
      name: "1945",
      subs: [
        {
          id: 1,
          name: "Morte de Hitler",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam quaerat cumque sed vitae nulla praesentium tenetur, nesciunt a odit eum vero rerum minus similique impedit facere pariatur voluptate? Accusantium!",
          selected: false,
        },
        {
          id: 2,
          name: "Queda da Alemanha",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis saepe repellendus enim provident, iste quae dolore rem in ab? Corrupti esse voluptatibus quo vero. Aliquam eaque fugiat blanditiis distinctio?",
          selected: false,
        },
      ],
    },
  ],
}));
