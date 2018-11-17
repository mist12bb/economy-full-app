export const PRO_UPDATE = "PRODUCTES:UPDATE";

export function updateProName(newName) {
    return {
        type: PRO_UPDATE,
        payload:{name: newName}
    }
}