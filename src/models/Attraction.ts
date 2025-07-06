import { Schema, model, models } from "mongoose";

const ImageSchema = new Schema(
  {
    alt: String,
    url: String,
  },
  { _id: false }
);

const PlaceSchema = new Schema(
  {
    title: String,
  },
  { _id: false }
);

const CoordSchema = new Schema(
  {
    lat: String,
    lon: String,
  },
  { _id: false }
);

const MetaTypeSchema = new Schema(
  {
    __typename: String,
    displayName: String,
    slug: String,
    title: String,
  },
  { _id: false }
);

const MetaSchema = new Schema(
  {
    __typename: String,
    isTopChoice: Boolean,
    type: MetaTypeSchema,
  },
  { _id: false }
);

const PoiSchema = new Schema(
  {
    __typename: String,
    coordinates: CoordSchema,
    esid: String,
    excerpt: String,
    images: [ImageSchema],
    meta: MetaSchema,
    places: [PlaceSchema],
    slug: String,
    title: String,
  },
  { _id: false }
);

const AttractionSchema = new Schema(
  {
    countryCode: { type: String, required: true },
    pois: [PoiSchema],
  },
  { timestamps: true }
);

export const Attraction =
  models.Attraction || model("Attraction", AttractionSchema);
