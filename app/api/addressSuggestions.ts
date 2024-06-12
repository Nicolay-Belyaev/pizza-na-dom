// const addressSuggestionUrl = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address"
// const token = "48bdcdb43f43be598cec53e5896e6b2b1a0eca54"

export const addressSuggestions = async (query: string) => {
    console.log(useRuntimeConfig().public.addressSuggestionUrl)
    const suggestionResponse = await fetch(useRuntimeConfig().public.addressSuggestionUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${useRuntimeConfig().apiToken}`
        },
        body: JSON.stringify({query: query})
    })
    if (!suggestionResponse.ok) {
        console.log('Похоже, у нас что-то сломалось, зайдите попозже.')
        console.log(suggestionResponse)
    }
    return await suggestionResponse.json();
}