import $req, { HttpMethod } from './fetch-config';

export const get = async (url: string) => await $req(url, {});

export const post = async (url: string, data: any) => await $req(url, { body: data, method: HttpMethod.post });

export const patch = async (url: string, data: any) => await $req(url, { body: data, method: HttpMethod.patch });

export const put = async (url: string, data: any) => await $req(url, { body: data, method: HttpMethod.put });

export const del = async (url: string, data: any) => await $req(url, { body: data, method: HttpMethod.delete });
