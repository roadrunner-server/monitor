<?php

declare(strict_types=1);

namespace App\RPC;

interface ServersRegistryInterface
{
    /**
     * @param non-empty-string $name
     * @param string $host
     */
    public function addServer(string $name, string $host): void;

    /**
     * @return non-empty-string[]
     */
    public function getServersNames(): array;

    public function getServerAddress(string $name): ?string;
}
