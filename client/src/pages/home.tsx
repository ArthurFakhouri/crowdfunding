import { useContext, useEffect, useState } from "react"
import { StateContext } from "../contexts"
import { DisplayCampaigns } from "../components/displayCampaigns"

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

export function Home() {

    const [isLoading, setIsLoading] = useState(false)
    const [campaigns, setCampaigns] = useState([] as ParsedCampaign[])

    const { address, contract, getCampaigns } = useContext(StateContext)

    async function fetchCampaigns() {
        setIsLoading(true)
        const data = await getCampaigns()
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