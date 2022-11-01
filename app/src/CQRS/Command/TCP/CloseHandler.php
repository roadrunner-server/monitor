<?php

declare(strict_types=1);

namespace App\CQRS\Command\TCP;

use App\RPC\RPCManagerInterface;
use Spiral\Cqrs\Attribute\CommandHandler;
use Spiral\Goridge\RPC\Codec\JsonCodec;

final class CloseHandler
{
    public function __construct(
        private readonly RPCManagerInterface $rpc,
    ) {
    }

    #[CommandHandler]
    public function __invoke(CloseCommand $command): bool
    {
        $rpc = $this->rpc->getServer($command->server, new JsonCodec());

        return (bool)$rpc->call('tcp.Close', $command->connectionUuid);
    }
}
