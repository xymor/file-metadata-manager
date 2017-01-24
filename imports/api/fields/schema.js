import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const fieldSchema = new SimpleSchema({
  name: {
    type: String,
  },
  schemaId: {
    type: String,
  },
});

export default fieldSchema;
