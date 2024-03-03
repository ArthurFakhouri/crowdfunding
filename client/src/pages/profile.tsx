import { useState, useContext, useEffect } from "react"
import { DisplayCampaigns } from "../components/displayCampaigns"
import { StateContext } from "../contexts"

type ParsedCampaign = {
    owner: string
    title: string
    description: string
    target: string
    deadline: number
    amountCollected: string
    image: string
    pId: string
}

export function Profile() {
    const [isLoading, setIsLoading] = useState(false)
    const [campaigns, setCampaigns] = useState([] as ParsedCampaign[])

    const { address, contract, getUserCampaigns } = useContext(StateContext)

    async function fetchCampaigns() {
        setIsLoading(true)
        const data = await getUserCampaigns()
        setCampaigns(data)
        setIsLoading(false)
    }

    useEffect(() => {
        if (contract) {
            fetchCampaigns()
        }
    }, [address, contract])

    return (
        <DisplayCampaigns
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
        />
    )
}