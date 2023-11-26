import React from "react";
import Head from "next/head";
export interface IMeta {
  title: any;
  keywords?: string;
  description?: string;
  canonical?: string;
  noIndexFollow?: boolean;
  imageContent?: null;
  nextPage?: null;
  prevPage?: null;
  sitBase?: null;
}

const Meta: React.FC<IMeta> = ({
  title,
  keywords = "",
  description = "",
  canonical = "",
  noIndexFollow = false,
  imageContent = null,
  nextPage = null,
  prevPage = null,
  sitBase = null,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge,IE=11,chrome=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      {/*<meta name="theme-color" content="#3397D3" />*/}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="language" content="En" />
      <meta name="copyright" content="DASHBOARD" />
      <meta name="description" content={description} />
      {/* 
  {environment.production && noIndexFollow && (
    <meta name="robots" content="noindex, follow" />
  )}
  {environment.production && !noIndexFollow && (
    <meta name="robots" content="index, follow" />
  )}
  {!environment.production && (
    <meta name="robots" content="noindex, nofollow" />
  )}
  {description !== '' && (
    <>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
    </>
  )}
  {keywords !== '' && <meta name="keywords" content={keywords} />}
  <meta name="generator" content="AvvocatoFlash" />
  <meta name="author" content="AvvocatoFlash, hello@avvocatoflash.it" />

  {canonical !== '' && (
    <>
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      <link itemProp="url" href={canonical} />
      <meta name="url" content={canonical} />
    </>
  )}
  <link rel="icon" href="/assets/favicon.ico" />
  <link rel="apple-touch-icon" href="/assets/az-logo.png" />
  <meta
    name="google-signin-client_id"
    content="1040611019713-71ga0b9o3b1hm7adtda4bdeprchgr473.apps.googleusercontent.com"
  />
  <meta property="fb:app_id" content="1302131996541601" />
  <meta property="fb:admins" content="325670091164656" />

  <meta property="og:site_name" content="AvvocatoFlash" />
  <meta property="og:title" content={title} />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  {imageContent && (
    <>
      <meta property="og:image" content={imageContent.url} />
      <meta property="og:image:width" content={imageContent.w} />
      <meta property="og:image:height" content={imageContent.h} />
      <meta itemProp="image" content={imageContent.url} />
      <meta name="twitter:image" content={imageContent.url}></meta>
    </>
  )}
  <meta itemProp="name" content={title} />
  <meta itemProp="description" content={description} />

  {nextPage && <link rel="next" href={nextPage} />}
  {prevPage && <link rel="prev" href={prevPage} />}

  {/* manifest */}
      {/*<link rel="manifest" href="/manifest.json" />
  <link
    href="/favicon-16x16.png"
    rel="icon"
    type="image/png"
    sizes="16x16"
  />
  <link
    href="/favicon-32x32.png"
    rel="icon"
    type="image/png"
    sizes="32x32"
  />
  <meta name="theme-color" content="#3497d3" /> */}
    </Head>
  );
};

export default Meta;
