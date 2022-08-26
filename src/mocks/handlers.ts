import { rest } from "msw";

export const equipments = [
  {
    id: 1,
    name: "ASUS",
    type: "laptop",
    so: "win 11",
    employee_id: null,
    created_at: "2022-08-23T15:32:48.000000Z",
    updated_at: "2022-08-23T16:21:29.000000Z",
    employee: null,
  },
  {
    id: 2,
    name: "HP",
    type: "desktop",
    so: "win 11",
    employee_id: null,
    created_at: "2022-08-23T15:32:48.000000Z",
    updated_at: "2022-08-23T16:21:29.000000Z",
    employee: null,
  },
];

export const employees = [
  {
    id: 4,
    name: "rwerwq",
    email: "432@fa.co",
    created_at: "2022-08-23T16:34:35.000000Z",
    updated_at: "2022-08-23T16:34:35.000000Z",
    equipment: null,
  },
  {
    id: 2,
    name: "Duber",
    email: "duber@gmail.co",
    created_at: "2022-08-23T15:27:25.000000Z",
    updated_at: "2022-08-23T15:27:25.000000Z",
    equipment: null,
  },
  {
    id: 5,
    name: "wervxcv",
    email: "bcxv@fdas.co",
    created_at: "2022-08-23T16:40:23.000000Z",
    updated_at: "2022-08-23T16:40:23.000000Z",
    equipment: {
      id: 5,
      name: "werw",
      type: "laptop",
      so: "ewrwqr",
      employee_id: 5,
      created_at: "2022-08-23T16:40:35.000000Z",
      updated_at: "2022-08-23T16:42:45.000000Z",
    },
  },
  {
    id: 3,
    name: "rwerw",
    email: "rerwq@fad.co",
    created_at: "2022-08-23T16:32:44.000000Z",
    updated_at: "2022-08-23T16:32:44.000000Z",
    equipment: {
      id: 3,
      name: "fadfsd",
      type: "desktop",
      so: "rwerwer",
      employee_id: 3,
      created_at: "2022-08-23T16:32:26.000000Z",
      updated_at: "2022-08-23T16:32:55.000000Z",
    },
  },
  {
    id: 1,
    name: "chris",
    email: "chris@mai.co",
    created_at: "2022-08-23T15:18:03.000000Z",
    updated_at: "2022-08-23T15:18:03.000000Z",
    equipment: {
      id: 1,
      name: "asus",
      type: "desktop",
      so: "win",
      employee_id: 1,
      created_at: "2022-08-23T15:19:19.000000Z",
      updated_at: "2022-08-23T15:19:19.000000Z",
    },
  },
];

export const handlers = [
  rest.get("http://devco-back.test/api/equipment/2", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(equipments));
  }),
];
