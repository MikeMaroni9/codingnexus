import { rest } from "msw";

const baseURL = "https://xzapi-01e251739139.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res(
        ctx.json({
            pk: 12,
            username: "cheko",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 12,
            profile_image: "https://res.cloudinary.com/dyv1fobjp/image/upload/v1/media/../default_profile_qdjgyp"    
        })
      );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
      return res(ctx.status(200));
    }),
  ];


