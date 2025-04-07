import {useEffect, useMemo, useState} from "react";

function getDomain(domain) {
    try {
        // Add protocol if not present
        if (!domain.startsWith("http")) domain = "https://" + domain;
        // Get the domain from the URL
        const url = new URL(domain);
        return url.hostname;
    } catch (error) {
        console.log(error)
        return null;
    }
}

function calculate(seller, bought) {
    // Convert into list of domain
    const sellerList = seller.split("\n").map((item) => item.trim()).map(getDomain).filter((e) => e != null);
    const boughtList = bought.split("\n").map((item) => item.trim()).map(getDomain).filter((e) => e != null);

    // Filter already bought
    const boughtSet = new Set(boughtList);
    const filteredSellerList = sellerList.filter((item) => !boughtSet.has(item));

    // Deduplicate
    return Array.from(new Set(filteredSellerList))
}

const SeoToolsPage = () => {
    // State
    const [seller, setSeller] = useState(localStorage.getItem("seller") || "");
    const [bought, setBought] = useState(localStorage.getItem("bought") || "");

    // Result
    const result = useMemo(() => calculate(seller, bought), [seller, bought]);

    // Save to local storage
    useEffect(() => {
        if (seller.trim().length > 0) localStorage.setItem("seller", seller);
        if (bought.trim().length > 0) localStorage.setItem("bought", bought);
    }, [seller, bought]);

    return (
        <div className="container mx-auto p-10">
            <div className="flex gap-4">
                <div className="flex-1">
                    <div>
                        <label className="block text-lg mb-2">Seller's Domain</label>
                        <textarea placeholder="1 line per domain" className="w-full border rounded"
                                  rows={15} onChange={(event) => setSeller(event.target.value)}>{seller}</textarea>
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <label className="block text-lg mb-2">Bought Domain</label>
                        <textarea placeholder="1 line per domain" className="w-full border rounded" rows={15}
                                  onChange={(event) => setBought(event.target.value)}>{bought}</textarea>
                    </div>
                </div>
            </div>

            <div>
                {result.length > 0 && (
                    <div className="mt-4">
                        <label className="block text-lg mb-2">Result</label>
                        {result.map((item, index) => (
                            <p key={`result-${index}`} className="mb-1">
                                {item}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SeoToolsPage;