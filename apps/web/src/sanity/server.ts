import { createClient } from "next-sanity";
import { definePreview } from "next-sanity/preview";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview: boolean = false) =>
  usePreview ? previewClient : sanityClient;

export const usePreview = definePreview({
  projectId: config.projectId,
  dataset: config.dataset,
});
