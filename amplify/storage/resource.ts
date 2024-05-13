import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: 'gen2-multi-cursor-demo-app',
  access: (allow) => ({
    'room/*': [
      allow.guest.to(['get']),
      allow.authenticated.to(['get', 'write', 'delete']),
      allow.groups(['admin']).to(['read', 'write', 'delete'])
    ]
  })
});