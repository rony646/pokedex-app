export type RootStackParamList = {
    Home: undefined,
    PokemonDetail: unknown,
};

export type RouteType = {
    key: string;
    name: string;
    params: {
      [key: string]: string,
    },
    path: any
}